# AI Quota & Monitoring APIs

### 1. Dashboard & Status (ADMX-024)
- `GET /admin/billing/ai-quota`: Summary of usage vs limit (Free/Prepaid/Postpaid).

### 2. Purchase AI credits (ADMX-025, 026)
- `GET /admin/billing/pricing`: Get unit price ($/hour).
- `POST /admin/billing/ai-credits`: Finalize purchase. <br> Body: `{ "hours": 50, "billing_timing": "now" }`.

### 3. Rules & Alerts (ADMX-027, 028)
- `GET/PATCH /admin/billing/ai-quota/settings`: Service behavior settings (Hard cap vs Over-usage).
- `GET/POST/PATCH /admin/members/ai-settings`: Manage email/slack alert rules. <br> Body: `{ "threshold": 80, "channel": "email" }`.

### 4. Granular Logs (ADMX-029)
- `GET /admin/billing/ai-quota/details`: List usage entries per user/meeting for auditing.
- `GET /admin/billing/ai-quota/details/export`: Export granular audits to CSV.

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "remaining_minutes": 1200, "usage_percentage": 75 }` |
