# Billing & Invoice APIs

### 1. GET /admin/billing/status (ADMX-017)
- Returns current plan details, next billing date, and usage summary.
- Response includes `current_plan`, `user_slots`, `ai_usage_summary`.

### 2. GET /admin/billing/invoices (ADMX-020)
- List past invoices.
- Query params: `year`, `status` (Paid/Pending).

### 3. GET /admin/billing/invoices/:id (ADMX-021)
- Detailed breakdown of a specific month's bill (User fees + AI overage).

### 4. Subscription Management (ADMX-022)
- `GET /admin/billing/plans`: List available plans.
- `POST /admin/billing/promo/validate`: Check promo code validity.
- `POST /admin/billing/plans/change`: Request upgrade/downgrade.

### 5. Payment Methods (ADMX-019)
- `GET/POST /admin/settings/payment-methods`: Manage Stripe credit cards or Invoice billing info.

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "id": "INV-123", "amount": 50000, "status": "paid" }` |
