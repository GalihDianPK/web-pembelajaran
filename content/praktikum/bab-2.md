---
title: "Bab 2 — Pemrograman Dasar Arduino"
weight: 2
description: "Belajar pemrograman dasar menggunakan Arduino IDE dan bahasa C/C++."
---

## Tujuan Pembelajaran

1. Mengenal lingkungan pengembangan Arduino IDE
2. Memahami struktur program Arduino (`setup()` dan `loop()`)
3. Mampu membuat program LED blinking
4. Memahami konsep digital I/O

## Struktur Program Arduino

Setiap program Arduino memiliki dua fungsi utama:

```c
void setup() {
  // Dijalankan sekali saat pertama kali
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // Dijalankan berulang-ulang
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

## Penjelasan Fungsi Dasar

| Fungsi | Kegunaan |
|--------|----------|
| `pinMode(pin, mode)` | Mengatur pin sebagai INPUT atau OUTPUT |
| `digitalWrite(pin, value)` | Menulis nilai HIGH/LOW ke pin digital |
| `digitalRead(pin)` | Membaca nilai dari pin digital |
| `delay(ms)` | Menghentikan eksekusi selama ms milidetik |
| `Serial.begin(baud)` | Memulai komunikasi serial |
| `Serial.println(data)` | Mengirim data ke serial monitor |

## Latihan

1. Buat program LED blinking dengan interval 500ms
2. Buat program yang membaca tombol dan menyalakan LED
3. Gunakan `Serial.println()` untuk menampilkan pesan di Serial Monitor
