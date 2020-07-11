/**
 * @description: 登陆接口参数
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: 登陆接口返回值
 */
export interface LoginResultModel {
  // 角色值数组
  roles: { roleName: string; value: string }[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // token
  token: string;
  // 真实名字
  realName: string;
  // 介绍
  desc?: string;
}