'use server';

import { Client } from '@notionhq/client';
import { handleNotionError, NotionResponse } from '@/lib/notion_helper';

export async function NotionShakeHand(apiKey: string, databaseId: string): Promise<NotionResponse<string>> {
  
  const cleanId = databaseId.split('?')[0].replace('https://www.notion.so/', '');

  const notion = new Client({ auth: apiKey });

  try {
    const response = await notion.databases.retrieve({
      database_id: cleanId, 
    });
    
    // 成功情况：因为上面定义了返回类型，TS 知道这里隐含 error?: undefined
    return {
      success: true,
      data: response.id 
    };

  } catch (error) {
    // 失败情况：调用泛型 helper，告诉它预期的数据类型是 string
    return handleNotionError<string>(error);
  }
}