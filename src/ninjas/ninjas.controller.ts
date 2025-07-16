import { Body, Controller, Get, Param, Query, Post } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) {}
    // Get all ninjas
    @Get()
    getNinjas(@Query('weapon') weapon: 'Katana' | 'Shuriken' | 'Nunchaku') {
        return this.ninjasService.getNinjas(weapon);
    }

    @Get(':id')
    getOneNinja(@Param('id') id: string) {
        return [{id}];
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return createNinjaDto.name;
    }
}
