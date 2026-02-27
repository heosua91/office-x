import { Module } from '@nestjs/common';
import { AdminPublicController } from 'src/modules/admin/controllers/admin.public.controller';
import { AuthPublicController } from 'src/modules/auth/controllers/auth.public.controller';
import { OfficePublicController } from 'src/modules/office/controllers/office.public.controller';
import { GuestPublicController } from 'src/modules/reception/controllers/guest.public.controller';
import { ReceptionPublicController } from 'src/modules/reception/controllers/reception.public.controller';
import { RoomPublicController } from 'src/modules/room/controllers/room.public.controller';
import { TngPublicController } from 'src/modules/tng/controllers/tng.public.controller';
import { UserPublicController } from 'src/modules/user/controllers/user.public.controller';
import { UserManagementPublicController } from 'src/modules/user/controllers/user-management.public.controller';
import { WebPublicController } from 'src/modules/web/controllers/web.public.controller';

@Module({
  controllers: [
    WebPublicController,
    UserPublicController,
    UserManagementPublicController,
    AuthPublicController,
    OfficePublicController,
    AdminPublicController,
    ReceptionPublicController,
    GuestPublicController,
    RoomPublicController,
    TngPublicController,
  ],
  providers: [],
  exports: [],
})
export class RoutesPublicModule {}
