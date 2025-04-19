
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const FILE_PATH = path.join(process.cwd(), 'data', 'newsletter.json');

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    // اعتبارسنجی ساده: فقط اعداد و طول 10 تا 13 رقم
    if (!/^\d{10,13}$/.test(phone)) {
      return NextResponse.json({ success: false, error: 'شماره نامعتبر است' }, { status: 400 });
    }

    // خواندن آرایهٔ موجود یا ساخت آرایهٔ جدید
    let list: string[] = [];
    try {
      const raw = await fs.readFile(FILE_PATH, 'utf8');
      list = JSON.parse(raw);
    } catch {
      /* فایل وجود ندارد – بار اول */
    }

    // جلوگیری از تکرار
    if (!list.includes(phone)) list.push(phone);

    await fs.mkdir(path.dirname(FILE_PATH), { recursive: true });
    await fs.writeFile(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: 'خطای سرور' }, { status: 500 });
  }
}