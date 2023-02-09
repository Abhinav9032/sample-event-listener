import { Processor, Process } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './constants';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';

@Processor(TRANSCODE_QUEUE)
export class TranscodeListener {
  private readonly logger = new Logger(TranscodeListener.name);
  @Process()
  async transcodeProcessor(job: Job<unknown>) {
    this.logger.debug('Listener service is now Listening to queue events');
    this.logger.debug('JOB ID : ', job.id);
    this.logger.debug('Data : ', job.data);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));
    this.logger.log('Task completed by dedicated listener ');
  }
}
