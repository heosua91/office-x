import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { MeetingRoomScheduleQueryDto } from '../dtos/request/meeting-room.schedule.query.dto';
import { MeetingRoomScheduleAdHocRequestDto } from '../dtos/request/meeting-room.schedule-ad-hoc.request.dto';
import { MeetingRoomScheduleExtendRequestDto } from '../dtos/request/meeting-room.schedule-extend.request.dto';
import { MeetingRoomSessionParticipantsQueryDto } from '../dtos/request/meeting-room.session-participants.query.dto';
import { MeetingRoomSessionSeatUpdateRequestDto } from '../dtos/request/meeting-room.session-seat-update.request.dto';
import { MeetingRoomSessionEnterRequestDto } from '../dtos/request/meeting-room.session-enter.request.dto';
import { MeetingRoomSessionConsentRequestRequestDto } from '../dtos/request/meeting-room.session-consent-request.request.dto';
import { MeetingRoomSessionConsentRequestDto } from '../dtos/request/meeting-room.session-consent.request.dto';
import { MeetingRoomPersonalSessionValidateQueryDto } from '../dtos/request/meeting-room.personal-session-validate.query.dto';
import { MeetingRoomPersonalSessionJoinRequestDto } from '../dtos/request/meeting-room.personal-session-join.request.dto';
import { MeetingRoomPersonalSessionAudioReadyRequestDto } from '../dtos/request/meeting-room.personal-session-audio-ready.request.dto';
import { MeetingRoomSessionFinishRequestDto } from '../dtos/request/meeting-room.session-finish.request.dto';
import { MeetingRoomRecordingPauseRequestDto } from '../dtos/request/meeting-room.recording-pause.request.dto';
import { MeetingRoomRecordingConfidentialMarkerRequestDto } from '../dtos/request/meeting-room.recording-confidential-marker.request.dto';

import { MeetingRoomScheduleResponseDto } from '../dtos/response/meeting-room.schedule.response.dto';
import { MeetingRoomScheduleAdHocResponseDto } from '../dtos/response/meeting-room.schedule-ad-hoc.response.dto';
import { MeetingRoomScheduleExtendResponseDto } from '../dtos/response/meeting-room.schedule-extend.response.dto';
import { MeetingRoomSessionParticipantsResponseDto, ParticipantType } from '../dtos/response/meeting-room.session-participants.response.dto';
import { MeetingRoomSuccessResponseDto } from '../dtos/response/meeting-room.success.response.dto';
import { MeetingRoomSessionEnterResponseDto } from '../dtos/response/meeting-room.session-enter.response.dto';
import { MeetingRoomSessionConsentResponseDto } from '../dtos/response/meeting-room.session-consent.response.dto';
import { MeetingRoomPersonalSessionValidateResponseDto, PersonalSessionParticipantType } from '../dtos/response/meeting-room.personal-session-validate.response.dto';
import { MeetingRoomPersonalSessionJoinResponseDto } from '../dtos/response/meeting-room.personal-session-join.response.dto';
import { MeetingRoomPersonalSessionAudioReadyResponseDto } from '../dtos/response/meeting-room.personal-session-audio-ready.response.dto';
import { MeetingRoomSessionFinishResponseDto } from '../dtos/response/meeting-room.session-finish.response.dto';
import { MeetingRoomRecordingPauseResponseDto, RecordingState } from '../dtos/response/meeting-room.recording-pause.response.dto';
import { MeetingRoomRecordingConfidentialMarkerResponseDto, ConfidentialMarkerState } from '../dtos/response/meeting-room.recording-confidential-marker.response.dto';

@ApiTags('[Public] Meeting Room')
@Controller({ path: '/meeting-room' })
export class MeetingRoomPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/schedule')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Fetch current/next reservation for linked room + parent device's personal-device join URL/QR/session code (ENTR-002)" })
  @ApiSuccessResponse(MeetingRoomScheduleResponseDto)
  @ApiErrorResponse()
  async getSchedule(
    @Query() _query: MeetingRoomScheduleQueryDto,
  ): Promise<AppResponseSuccess<MeetingRoomScheduleResponseDto>> {
    return this.responseService.success(
      {
        room: {
          id: 'd4e5f6a7-b8c9-0123-def0-234567890123',
          name: 'Horizon Room',
          location: '3rd Floor, East Wing',
        },
        currentMeeting: {
          id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
          title: 'Q2 Planning Sync',
          startTime: '2026-04-25T09:00:00.000Z',
          endTime: '2026-04-25T10:00:00.000Z',
          hostName: 'Alice Johnson',
          status: 'ongoing',
        },
        nextMeeting: {
          id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
          title: 'Product Design Review',
          startTime: '2026-04-25T10:30:00.000Z',
          endTime: '2026-04-25T11:30:00.000Z',
          hostName: 'Bob Martinez',
          status: 'scheduled',
        },
        todaysSchedule: [
          {
            id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
            title: 'Q2 Planning Sync',
            startTime: '2026-04-25T09:00:00.000Z',
            endTime: '2026-04-25T10:00:00.000Z',
            status: 'ongoing',
            hostName: 'Alice Johnson',
          },
          {
            id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
            title: 'Product Design Review',
            startTime: '2026-04-25T10:30:00.000Z',
            endTime: '2026-04-25T11:30:00.000Z',
            status: 'scheduled',
            hostName: 'Bob Martinez',
          },
        ],
        personalJoin: {
          url: 'https://app.officex.io/join?token=tok_xyz789abc',
          qrImageUrl: 'https://storage.officex.io/qr/tok_xyz789abc.png',
          sessionCode: 'SES-88XY',
          expiresAt: '2026-04-25T09:30:00.000Z',
          joinWindowStartAt: '2026-04-25T08:45:00.000Z',
        },
      },
      MeetingRoomScheduleResponseDto,
    );
  }

  @Post('/schedule/ad-hoc')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create immediate ad-hoc meeting (ENTR-003)' })
  @ApiSuccessResponse(MeetingRoomScheduleAdHocResponseDto)
  @ApiErrorResponse()
  async createAdHoc(
    @Body() _body: MeetingRoomScheduleAdHocRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomScheduleAdHocResponseDto>> {
    return this.responseService.success(
      {
        meetingId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        startTime: '2026-04-25T09:05:00.000Z',
        endTime: '2026-04-25T09:35:00.000Z',
      },
      MeetingRoomScheduleAdHocResponseDto,
    );
  }

  @Post('/schedule/extend')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Extend duration of active meeting (15 min/press) (ENTR-009/010)' })
  @ApiSuccessResponse(MeetingRoomScheduleExtendResponseDto)
  @ApiErrorResponse()
  async extendSchedule(
    @Body() _body: MeetingRoomScheduleExtendRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomScheduleExtendResponseDto>> {
    return this.responseService.success(
      {
        meetingId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        newEndTime: '2026-04-25T10:15:00.000Z',
      },
      MeetingRoomScheduleExtendResponseDto,
    );
  }

  @Get('/session/participants')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch expected attendee list for active meeting (ENTR-004)' })
  @ApiSuccessResponse(MeetingRoomSessionParticipantsResponseDto)
  @ApiErrorResponse()
  async getParticipants(
    @Query() _query: MeetingRoomSessionParticipantsQueryDto,
  ): Promise<AppResponseSuccess<MeetingRoomSessionParticipantsResponseDto>> {
    return this.responseService.success(
      {
        meetingId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        participants: [
          {
            id: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890',
            type: ParticipantType.USER,
            fullName: 'Alice Johnson',
            role: 'host',
            rsvpStatus: 'accepted',
            deviceBound: true,
            seatLabel: 'Host',
          },
          {
            id: 'c3d4e5f6-a7b8-9012-cdef-345678901234',
            type: ParticipantType.USER,
            fullName: 'Charlie Lee',
            role: 'attendee',
            rsvpStatus: 'accepted',
            deviceBound: false,
          },
          {
            id: 'e5f6a7b8-c9d0-1234-ef01-567890123456',
            type: ParticipantType.GUEST,
            fullName: 'Diana Park',
            role: 'attendee',
            rsvpStatus: 'pending',
            deviceBound: false,
          },
        ],
      },
      MeetingRoomSessionParticipantsResponseDto,
    );
  }

  @Post('/session/seat-update')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update seat map positions (host drag-and-drop) (ENTR-006)' })
  @ApiSuccessResponse(MeetingRoomSuccessResponseDto)
  @ApiErrorResponse()
  async seatUpdate(
    @Body() _body: MeetingRoomSessionSeatUpdateRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomSuccessResponseDto>> {
    return this.responseService.success({ success: true }, MeetingRoomSuccessResponseDto);
  }

  @Post('/session/enter')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Host commits entering the meeting (status → ongoing) with explicit recording_enabled flag (ENTR-008)" })
  @ApiSuccessResponse(MeetingRoomSessionEnterResponseDto)
  @ApiErrorResponse()
  async enterSession(
    @Body() _body: MeetingRoomSessionEnterRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomSessionEnterResponseDto>> {
    return this.responseService.success(
      {
        meetingId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        status: 'ongoing',
        startedAt: '2026-04-25T09:02:00.000Z',
        recordingEnabled: true,
      },
      MeetingRoomSessionEnterResponseDto,
    );
  }

  @Post('/session/consent-request')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Host triggers consent request broadcast (ENTR-008)' })
  @ApiSuccessResponse(MeetingRoomSuccessResponseDto)
  @ApiErrorResponse()
  async requestConsent(
    @Body() _body: MeetingRoomSessionConsentRequestRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomSuccessResponseDto>> {
    return this.responseService.success({ success: true }, MeetingRoomSuccessResponseDto);
  }

  @Post('/session/consent')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Record per-device individual recording consent (agree/decline) (ENTR-007/008/012)' })
  @ApiSuccessResponse(MeetingRoomSessionConsentResponseDto)
  @ApiErrorResponse()
  async recordConsent(
    @Body() _body: MeetingRoomSessionConsentRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomSessionConsentResponseDto>> {
    return this.responseService.success(
      {
        deviceSessionId: 'sess_abc123def456',
        consentGiven: true,
        recordedAt: '2026-04-25T09:01:30.000Z',
      },
      MeetingRoomSessionConsentResponseDto,
    );
  }

  @Get('/personal-session/validate')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Validate personal-device join URL token / session code; returns meeting metadata if within join window (ENTR-012)' })
  @ApiSuccessResponse(MeetingRoomPersonalSessionValidateResponseDto)
  @ApiErrorResponse()
  async validatePersonalSession(
    @Query() _query: MeetingRoomPersonalSessionValidateQueryDto,
  ): Promise<AppResponseSuccess<MeetingRoomPersonalSessionValidateResponseDto>> {
    return this.responseService.success(
      {
        valid: true,
        meeting: {
          id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
          title: 'Q2 Planning Sync',
          startTime: '2026-04-25T09:00:00.000Z',
          endTime: '2026-04-25T10:00:00.000Z',
          roomName: 'Horizon Room',
        },
        participants: [
          {
            id: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890',
            fullName: 'Alice Johnson',
            type: PersonalSessionParticipantType.USER,
          },
          {
            id: 'c3d4e5f6-a7b8-9012-cdef-345678901234',
            fullName: 'Charlie Lee',
            type: PersonalSessionParticipantType.USER,
          },
        ],
        joinWindow: {
          startAt: '2026-04-25T08:45:00.000Z',
          endAt: '2026-04-25T09:15:00.000Z',
        },
      },
      MeetingRoomPersonalSessionValidateResponseDto,
    );
  }

  @Post('/personal-session/join')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Personal browser device joins meeting as a participant (creates device_sessions row) (ENTR-012)' })
  @ApiSuccessResponse(MeetingRoomPersonalSessionJoinResponseDto)
  @ApiErrorResponse()
  async joinPersonalSession(
    @Body() _body: MeetingRoomPersonalSessionJoinRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomPersonalSessionJoinResponseDto>> {
    return this.responseService.success(
      {
        deviceSessionId: 'sess_personal_xyz789',
        meetingId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        participantId: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890',
        status: 'linked',
      },
      MeetingRoomPersonalSessionJoinResponseDto,
    );
  }

  @Post('/personal-session/audio-ready')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Signal mic permission granted + readiness for audio WebSocket (ENTR-012)' })
  @ApiSuccessResponse(MeetingRoomPersonalSessionAudioReadyResponseDto)
  @ApiErrorResponse()
  async audioReady(
    @Body() _body: MeetingRoomPersonalSessionAudioReadyRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomPersonalSessionAudioReadyResponseDto>> {
    return this.responseService.success(
      {
        deviceSessionId: 'sess_personal_xyz789',
        audioState: 'ready',
        websocketEndpoint: 'wss://audio.officex.io/stream/sess_personal_xyz789',
        streamToken: 'stream_tok_abc987xyz',
      },
      MeetingRoomPersonalSessionAudioReadyResponseDto,
    );
  }

  @Post('/session/finish')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Terminate active meeting session (status → completed) (ENTR-009/010)' })
  @ApiSuccessResponse(MeetingRoomSessionFinishResponseDto)
  @ApiErrorResponse()
  async finishSession(
    @Body() _body: MeetingRoomSessionFinishRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomSessionFinishResponseDto>> {
    return this.responseService.success(
      {
        meetingId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        status: 'completed',
        endedAt: '2026-04-25T10:00:00.000Z',
      },
      MeetingRoomSessionFinishResponseDto,
    );
  }

  @Post('/session/recording/pause')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Host pauses/resumes AI recording mid-meeting (ENTR-009)' })
  @ApiSuccessResponse(MeetingRoomRecordingPauseResponseDto)
  @ApiErrorResponse()
  async pauseRecording(
    @Body() _body: MeetingRoomRecordingPauseRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomRecordingPauseResponseDto>> {
    return this.responseService.success(
      {
        meetingId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        recordingState: RecordingState.PAUSED,
        timestampInMeeting: 1845,
      },
      MeetingRoomRecordingPauseResponseDto,
    );
  }

  @Post('/session/recording/confidential-marker')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Host marks confidential segment (excluded from AI minutes) (ENTR-009)' })
  @ApiSuccessResponse(MeetingRoomRecordingConfidentialMarkerResponseDto)
  @ApiErrorResponse()
  async confidentialMarker(
    @Body() _body: MeetingRoomRecordingConfidentialMarkerRequestDto,
  ): Promise<AppResponseSuccess<MeetingRoomRecordingConfidentialMarkerResponseDto>> {
    return this.responseService.success(
      {
        meetingId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        markerState: ConfidentialMarkerState.STARTED,
        timestampInMeeting: 2100,
      },
      MeetingRoomRecordingConfidentialMarkerResponseDto,
    );
  }
}
