---
title: "Bab 4 — Komunikasi Serial"
weight: 4
description: "Memahami protokol komunikasi serial UART, SPI, dan I2C pada mikrokontroler."
---

## Tujuan Pembelajaran

1. Memahami konsep komunikasi serial
2. Mengenal protokol UART, SPI, dan I2C
3. Mampu mengimplementasikan komunikasi antar perangkat

## Protokol Komunikasi

| Protokol | Kabel | Kecepatan | Jarak | Penggunaan |
|----------|-------|-----------|-------|------------|
| **UART** | 2 (TX, RX) | Sedang | Pendek | Serial Monitor, GPS |
| **SPI** | 4 (MOSI, MISO, SCK, SS) | Tinggi | Pendek | Display, SD Card |
| **I2C** | 2 (SDA, SCL) | Sedang | Pendek | Sensor, LCD |

## Latihan

1. Kirim data dari Arduino ke Serial Monitor menggunakan UART
2. Hubungkan LCD 16x2 via I2C dan tampilkan teks
3. Baca data dari modul SD Card menggunakan SPI
