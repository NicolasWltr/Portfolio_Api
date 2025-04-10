import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() body: { name: string; email: string; message: string }): Promise<{ message: string }> {
    const { name, email, message } = body;
    await this.emailService.sendEmail(name, email, message);
    return { message: 'Email sent successfully' };
  }
}
