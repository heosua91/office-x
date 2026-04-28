import { Module } from '@nestjs/common';

// Section 1 — Auth & Registration / System / Webhooks
import { AuthPublicController } from 'src/modules/auth/controllers/auth.public.controller';
import { SystemPublicController } from 'src/modules/system/controllers/system.public.controller';
import { WebhookPublicController } from 'src/modules/system/controllers/webhook.public.controller';

// Section 2 — Office User Workspace
import { AiAssistantPublicController } from 'src/modules/office/controllers/ai-assistant.public.controller';
import { ClientsPublicController } from 'src/modules/office/controllers/clients.public.controller';
import { MeetingsPublicController } from 'src/modules/office/controllers/meetings.public.controller';
import { NotificationsPublicController } from 'src/modules/office/controllers/notifications.public.controller';
import { SchedulePublicController } from 'src/modules/office/controllers/schedule.public.controller';
import { SettingsPublicController } from 'src/modules/office/controllers/settings.public.controller';
import { TasksPublicController } from 'src/modules/office/controllers/tasks.public.controller';

// Section 3 — Company Administration
import { AdminAiTemplatesPublicController } from 'src/modules/admin/controllers/admin-ai-templates.public.controller';
import { AdminAiTimePublicController } from 'src/modules/admin/controllers/admin-ai-time.public.controller';
import { AdminBillingPublicController } from 'src/modules/admin/controllers/admin-billing.public.controller';
import { AdminBrandingPublicController } from 'src/modules/admin/controllers/admin-branding.public.controller';
import { AdminCompanyPublicController } from 'src/modules/admin/controllers/admin-company.public.controller';
import { AdminDictionaryPublicController } from 'src/modules/admin/controllers/admin-dictionary.public.controller';
import { AdminHistoryPublicController } from 'src/modules/admin/controllers/admin-history.public.controller';
import { AdminMasterDataPublicController } from 'src/modules/admin/controllers/admin-master-data.public.controller';
import { AdminMeetingRoomsPublicController } from 'src/modules/admin/controllers/admin-meeting-rooms.public.controller';
import { AdminPresetsPublicController } from 'src/modules/admin/controllers/admin-presets.public.controller';
import { AdminTabletsPublicController } from 'src/modules/admin/controllers/admin-tablets.public.controller';
import { AdminUsersPublicController } from 'src/modules/admin/controllers/admin-users.public.controller';

// Section 4 — Reception & Visitor
import { GuestPublicController } from 'src/modules/reception/controllers/guest.public.controller';
import { ReceptionPublicController } from 'src/modules/reception/controllers/reception.public.controller';

// Section 5 — Meeting Room Device
import { CompaniesSearchPublicController } from 'src/modules/meeting-room/controllers/companies-search.public.controller';
import { DevicePublicController } from 'src/modules/meeting-room/controllers/device.public.controller';
import { MeetingRoomPublicController } from 'src/modules/meeting-room/controllers/meeting-room.public.controller';

// Section 6 — Global TNG Admin
import { TngAiPublicController } from 'src/modules/tng/controllers/tng-ai.public.controller';
import { TngAnalyticsPublicController } from 'src/modules/tng/controllers/tng-analytics.public.controller';
import { TngCompaniesPublicController } from 'src/modules/tng/controllers/tng-companies.public.controller';
import { TngCompliancePublicController } from 'src/modules/tng/controllers/tng-compliance.public.controller';
import { TngDeviceCatalogPublicController } from 'src/modules/tng/controllers/tng-device-catalog.public.controller';
import { TngPlansPublicController } from 'src/modules/tng/controllers/tng-plans.public.controller';
import { TngPresetsPublicController } from 'src/modules/tng/controllers/tng-presets.public.controller';
import { TngSettingsPublicController } from 'src/modules/tng/controllers/tng-settings.public.controller';

// Section 7 — System Health & Audit
import { AdminLogsPublicController } from 'src/modules/system-health/controllers/admin-logs.public.controller';
import { AdminMonitoringPublicController } from 'src/modules/system-health/controllers/admin-monitoring.public.controller';
import { PublicStatusPublicController } from 'src/modules/system-health/controllers/public-status.public.controller';

@Module({
  controllers: [
    // Section 1 — Auth / System / Webhooks
    AuthPublicController,
    SystemPublicController,
    WebhookPublicController,

    // Section 2 — Office
    NotificationsPublicController,
    AiAssistantPublicController,
    MeetingsPublicController,
    SchedulePublicController,
    ClientsPublicController,
    TasksPublicController,
    SettingsPublicController,

    // Section 3 — Admin
    AdminUsersPublicController,
    AdminMasterDataPublicController,
    AdminMeetingRoomsPublicController,
    AdminTabletsPublicController,
    AdminPresetsPublicController,
    AdminBrandingPublicController,
    AdminCompanyPublicController,
    AdminBillingPublicController,
    AdminAiTimePublicController,
    AdminAiTemplatesPublicController,
    AdminDictionaryPublicController,
    AdminHistoryPublicController,

    // Section 4 — Reception / Guest
    ReceptionPublicController,
    GuestPublicController,

    // Section 5 — Meeting Room / Device / Companies search
    DevicePublicController,
    MeetingRoomPublicController,
    CompaniesSearchPublicController,

    // Section 6 — TNG
    TngCompaniesPublicController,
    TngPlansPublicController,
    TngDeviceCatalogPublicController,
    TngAnalyticsPublicController,
    TngSettingsPublicController,
    TngAiPublicController,
    TngCompliancePublicController,
    TngPresetsPublicController,

    // Section 7 — System Health & Audit
    PublicStatusPublicController,
    AdminLogsPublicController,
    AdminMonitoringPublicController,
  ],
  providers: [],
  exports: [],
})
export class RoutesPublicModule {}
