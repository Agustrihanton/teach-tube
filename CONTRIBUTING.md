# Berkontribusi

Semua orang dipersilakan untuk berkolaborasi dalam proyek ini, tetapi harap mempertimbangkan hal-hal berikut:

- Sumber daya harus sesuai dengan tujuan proyek
- Sumber daya tidak boleh duplikat; pencarian teks di file README seharusnya cukup untuk menemukan jawaban ini
- Daftar sumber daya ditulis dalam TypeScript; jika Anda memerlukan bantuan terkait hal ini, silakan buka issue dengan informasi sumber daya

## Menambahkan sumber daya

- Sumber daya diorganisir secara alfabetis dalam file terpisah di folder `resources`; gunakan properti `name` sumber daya untuk menentukan file mana yang menjadi tempatnya
- Dalam file tersebut, jaga urutan alfabetis, lagi-lagi berdasarkan properti `name` sumber daya

### Format Sumber Daya

Setiap sumber daya dimasukkan ke dalam sebuah objek, seperti berikut:

```typescript
// resources/f.ts
 {
    name: "A deep dive into optimizing LCP",
    categories: ["Core Web Vitals", "Web Development", "Frontend Development"],
    keywords: ["optimize Web", "lcp", "tips"],
    description:
      "There is no shortage of advice on the web about improving page load performance, and yet, of the three Core Web Vitals, Largest Contentful Paint (LCP) is still the hardest metric for most sites to consistently meet the recommended 'good' threshold. ",
    url: "https://www.youtube.com/watch?v=fWoI9DXmpdk",
  },
```

Perhatikan bahwa:

- `name` adalah **string** dan **wajib**.
- `description` adalah **string** dan **wajib**.
- `categories` adalah **array string** dan **wajib**.
- `url` adalah **url** dari youtube dan **wajib**.
- `keywords` adalah **array string** dan **wajib**.
  - Sebuah sumber daya dapat masuk ke maksimum 3 kategori dan minimum 1 kategori.
  - gunakan `keywords` untuk meningkatkan keterlihatan dalam hasil pencarian
  - Kategori yang tersedia terdaftar dalam `types/category.ts`.
  - Jika kategori yang Anda butuhkan tidak terdaftar, Anda dapat menambahkannya dan menjelaskan dalam PR mengapa itu diperlukan.
  - Jika editor Anda mendukung TypeScript, seharusnya memberikan kategori yang tersedia saat Anda mengetik.
- `url` adalah **string** dan wajib.
  - Harus dimulai dengan `http://` atau `https://`.
- `keywords` adalah **array string** dan **opsional**, digunakan pada fitur pencarian di situs web.

## Mengedit sumber daya

Jika Anda menemukan bahwa sumber daya yang ada dapat ditingkatkan dengan beberapa pengeditan, jangan ragu untuk melakukan modifikasi.

## Kontribusi lainnya

Kontribusi yang tidak terkait dengan sumber daya juga diterima, tetapi harap buka issue yang menjelaskan perubahan yang Anda pikirkan sebelum membuat pull request.

## Memperbarui README dan DB

Harap hanya mengubah file di folders `resources`, karena `README` dan `DB` akan saya update secara manual saat melakukan merge request.

## Memerlukan bantuan?

Daftar sumber daya dibuat dalam TypeScript, dan jika Anda tidak dapat membuat kontribusi untuk ini atau alasan lainnya, jangan ragu untuk membuka issue yang menjelaskan situasi Anda, sehingga pengembang lain dapat membantu Anda memasukkan sumber daya Anda ke dalam daftar.

---

## Terima kasih telah berkontribusi
