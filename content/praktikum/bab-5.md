---
title: "Bab 5 — PWM dan Kontrol Motor"
weight: 5
description: "Teknik Pulse Width Modulation (PWM) untuk mengontrol kecepatan motor dan intensitas LED."
---

## Tujuan Pembelajaran

1. Memahami konsep PWM (Pulse Width Modulation)
2. Mengontrol kecerahan LED menggunakan PWM
3. Mengontrol kecepatan motor DC
4. Menggunakan driver motor L298N

## Apa Itu PWM?

PWM adalah teknik modulasi sinyal digital untuk mensimulasikan output analog. Dengan mengubah **duty cycle** (rasio ON/OFF), kita bisa mengontrol daya yang diberikan ke beban.

- **Duty Cycle 0%** = Selalu OFF
- **Duty Cycle 50%** = ON setengah waktu
- **Duty Cycle 100%** = Selalu ON

## Latihan

1. Buat efek *breathing LED* menggunakan `analogWrite()`
2. Kontrol kecepatan motor DC menggunakan potensiometer
3. Buat robot bergerak maju-mundur dengan driver L298N
