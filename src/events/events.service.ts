import { Injectable } from '@nestjs/common';
import { Event } from './events.entity'; 
import { ApiService } from 'src/data/api';
@Injectable()
export class EventsService {
  

    async getAllEvents(): Promise<Event[]> {
        return ( await ApiService.Events.getEvents()).data;
    }

    async getEventsBetweenDates(start_date,end_date): Promise<Event[]> {
        return ( await ApiService.Events.getEventsBetweenDates(start_date,end_date)).data;
    }
}



