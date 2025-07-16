import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
    private ninjas = [
        {id: 0, name: 'Ninja One', weapon: 'Katana'},
        {id: 1, name: 'Ninja Two', weapon: 'Shuriken'},
        {id: 2, name: 'Ninja Three', weapon: 'Nunchaku'}
    ]

    getNinjas(weapon?: 'Katana' | 'Shuriken' | 'Nunchaku') {
        if (weapon) {
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }
        return this.ninjas;
    }
}
