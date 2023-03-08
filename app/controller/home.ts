import { Body, Controller, Get, Post, Query } from 'chumi';

@Controller()
export default class {
  @Get('/')
  async index(@Query('name') name: string) {
    return `hi, ${name || 'api-gateway'}`;
  }
}
