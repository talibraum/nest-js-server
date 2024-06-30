import { Controller ,Get,Param} from '@nestjs/common';
import { EventsService } from './events.service';
@Controller('events')
export class EventsController {
    constructor(private eventService: EventsService) {}

    @Get()
    getAllEvents() {
      return this.eventService.getAllEvents();
    }

    @Get('start/:start/end/:end')
    getEventsBetweenDates(@Param('start') start: number, @Param('end') end: number) {
      return this.eventService.getEventsBetweenDates(start,end);
    }
}
