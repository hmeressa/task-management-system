import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isUUID } from 'class-validator';

@Injectable()
export class UuidValidator implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (!isUUID(value)) {
      throw new BadRequestException(
        `Invalid UUID format for ${metadata.data} parameter`,
      );
    }
    return value;
  }
}
