// lib/notion_helper.ts
import { isNotionClientError, APIResponseError } from '@notionhq/client';

// 这里的 T = any 保持不变
export type NotionResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: {
    status?: number;
    code: string;
    message: string;
    rawMessage?: string;
  };
};

// 【关键修改】：这里必须加上 <T = null>，并将返回类型改为 NotionResponse<T>
export function handleNotionError<T = null>(error: unknown): NotionResponse<T> {
  // 1. 判断是否为 Notion 官方 SDK 抛出的错误
  if (isNotionClientError(error)) {
    const code = error.code;
    const msg = error.message;
    
    // 初始化 status
    let status: number | undefined = undefined;

    // 2. 进一步检查是否为 API 响应错误
    if (APIResponseError.isAPIResponseError(error)) {
      status = error.status;
    }

    let userMessage = '发生了未知 Notion 错误';

    // 3. 根据 status 或 code 进行判断
    if (status) {
      switch (status) {
        case 400:
          userMessage = '请求参数错误 (400)。请检查 Database ID 格式是否正确。';
          break;
        case 401:
          userMessage = '未授权 (401)。API Key 无效或已被撤销。';
          break;
        case 403:
          userMessage = '无权访问 (403)。请确保 Integration 已被 Invite 到该页面。';
          break;
        case 404:
          userMessage = '未找到 (404)。Database ID 错误或页面已删除。';
          break;
        case 409:
          userMessage = '数据冲突 (409)。写入时发生冲突，请重试。';
          break;
        case 429:
          userMessage = '请求过快 (429)。触发了 Notion 的速率限制。';
          break;
        case 500:
          userMessage = 'Notion 服务器错误 (500)。Notion 端暂时崩溃。';
          break;
        case 503:
          userMessage = '服务不可用 (503)。Notion 正在维护中。';
          break;
        default:
          userMessage = `Notion API 错误 (${status}): ${msg}`;
      }
    } else {
      // 处理没有 status 的 Notion 错误
      if (code === 'notionhq_client_request_timeout') {
        userMessage = '连接超时。请检查网络连接或代理设置。';
      } else {
        userMessage = `客户端错误 (${code}): ${msg}`;
      }
    }

    // 返回符合 NotionResponse<T> 结构的对象
    // 因为 data 是可选的，所以这里不返回 data 也是合法的 NotionResponse<T>
    return {
      success: false,
      error: {
        status,
        code,
        message: userMessage,
        rawMessage: msg,
      },
    };
  }

  // 4. 处理非 Notion 错误
  const errorMessage = error instanceof Error ? error.message : String(error);
  
  if (errorMessage.includes('fetch failed') || errorMessage.includes('undici')) {
    return {
      success: false,
      error: {
        status: 0,
        code: 'NETWORK_ERROR',
        message: '无法连接到 Notion 服务器。请检查服务器网络或 VPN/代理设置 (DNS污染或连接被重置)。',
        rawMessage: errorMessage,
      },
    };
  }
  
  // 其他未知错误
  return {
    success: false,
    error: {
      status: 0,
      code: 'UNKNOWN_ERROR',
      message: '未知系统错误，请检查网络或服务器日志。',
      rawMessage: errorMessage,
    },
  };
}