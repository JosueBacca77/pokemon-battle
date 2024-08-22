import { Controller, Post, Body, Get } from '@nestjs/common';
import { BattleService } from './battle.service';
import { Battle } from './entities/battle.entity';
import { StartBattleDto } from './dto/start-battle.dto';

@Controller('v1/battles')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async startBattle(@Body() startBattle:StartBattleDto): Promise<Battle> {
    return this.battleService.fight(startBattle.pokemon1Id, startBattle.pokemon2Id);
  }

  @Get()
  async getBattles() {
    const battles = await this.battleService.getAll();

    return {
      success: true,
      battles
    }
  }
}
