import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { IsoDateService } from './iso-date.service';

@Resolver()
export class IsoDateResolver {
    constructor(private readonly isoDateService: IsoDateService
        ) {  }

    @Mutation(() => String)
    async checkDate(@Args('date') date: string): Promise<String> {
        return this.isoDateService.checkDate(date);
    }
}