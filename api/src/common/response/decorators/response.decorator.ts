import { applyDecorators, type Type } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import {
  AppResponseError,
  AppResponsePagingPagination,
  AppResponsePagingSuccess,
  AppResponseSuccess,
} from '../dtos/response.dto';

export const ApiSuccessResponse = <T>(dataDto: Type<T>, isArray = false) =>
  applyDecorators(
    ApiExtraModels(AppResponseSuccess, dataDto),
    ApiResponse({
      status: 200,
      schema: {
        allOf: [
          { $ref: getSchemaPath(AppResponseSuccess) },
          {
            properties: {
              data: isArray
                ? { type: 'array', items: { $ref: getSchemaPath(dataDto) } }
                : {
                    $ref: getSchemaPath(dataDto),
                  },
            },
          },
        ],
      },
    })
  );

export const ApiPagingSuccessResponse = <T>(dataDto: Type<T>) =>
  applyDecorators(
    ApiExtraModels(AppResponsePagingSuccess, AppResponsePagingPagination, dataDto),
    ApiResponse({
      status: 200,
      schema: {
        allOf: [
          { $ref: getSchemaPath(AppResponsePagingSuccess) },
          {
            properties: {
              data: {
                allOf: [
                  { $ref: getSchemaPath(AppResponsePagingPagination) },
                  {
                    properties: {
                      items: {
                        type: 'array',
                        items: { $ref: getSchemaPath(dataDto) },
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    })
  );

export const ApiErrorResponse = () =>
  applyDecorators(
    ApiExtraModels(AppResponseError),
    ApiResponse({
      status: '4XX',
      type: AppResponseError,
    })
  );
