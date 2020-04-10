import { Controller, Get } from '@nestjs/common';
import { IPayload } from '../common';

@Controller('pantries')
export class PantriesController {
    @Get()
    public async get(): Promise<IPayload<any>> {
        return {
            data: [{
                type: 'pantry',
                id: '1',
                attributes: { }
            }]
        };
    }
}