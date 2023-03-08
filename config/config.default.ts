import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // 值的大小可以根据自己的需求修改
  config.bodyParser = {
    formLimit: '50mb',
    jsonLimit: '50mb',
    textLimit: '50mb'
  };

  config.keys = appInfo.name + '_1654827678310_7252';

  // add your middleware config here
  config.middleware = ['chumi'];

  return config;
};
