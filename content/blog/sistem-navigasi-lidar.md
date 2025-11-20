---
title: "Sistem Navigasi Berbasis LIDAR pada Mandakini 3.0"
date: "2025-11-15"
description: "Penjelasan teknis bagaimana kami mengintegrasikan Velodyne VLP-16 untuk deteksi rintangan (buoy) di kompetisi Roboboat."
author: "Budi Santoso"
image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
tags: ["Programming", "Computer Vision"]
---

# Pendahuluan

Tantangan utama dalam Roboboat 2026 adalah **Obstacle Avoidance**. Kapal harus bisa melihat rintangan tanpa menabraknya.

## Mengapa LIDAR?

Kami memilih **Velodyne VLP-16** karena:

1. Akurasi tinggi hingga 100 meter.
2. 360 derajat Field of View.
3. Tahan terhadap gangguan cahaya matahari (berbeda dengan kamera).

## Implementasi Kode

Kami menggunakan ROS 2 Humble untuk memproses Point Cloud. Berikut adalah potongan logika filtering:

```python
def filter_points(cloud):
    # Hapus titik yang terlalu jauh atau pantulan air
    return [p for p in cloud if p.z > 0.5]
```
