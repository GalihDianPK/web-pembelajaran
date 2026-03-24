---
title: "Bab 6 — Konektivitas WiFi"
weight: 6
description: "Menghubungkan mikrokontroler ESP32 ke jaringan WiFi dan mengirim data ke cloud."
---

## Tujuan Pembelajaran

1. Memahami arsitektur WiFi pada ESP32
2. Menghubungkan ESP32 ke jaringan WiFi
3. Membuat web server sederhana di ESP32
4. Mengirim data sensor ke platform cloud

## Menghubungkan ESP32 ke WiFi

```c
#include <WiFi.h>

const char* ssid = "NamaWiFi";
const char* password = "PasswordWiFi";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("Terhubung!");
  Serial.println(WiFi.localIP());
}
```

## Latihan

1. Hubungkan ESP32 ke WiFi dan tampilkan IP Address di Serial Monitor
2. Buat web server yang menampilkan data sensor suhu
3. Kirim data sensor ke platform ThingSpeak
