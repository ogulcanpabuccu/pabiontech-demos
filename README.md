# PabionTech Demos

Sektörel örnek (demo) web siteleri. Her klasör bağımsız bir tek sayfa site.

## Demolar

| Sektör | Klasör | URL |
|---|---|---|
| Klinik | `klinik/` | https://klinik.demo.pabiontech.com |

## Yapı

Her demo bağımsız: kendi `index.html`, `css/`, `js/`, `images/` dosyalarını
içerir. Backend yoktur — tüm formlar yalnızca UI gösterimi içindir.

## Deploy

Her demo, Cloudflare Pages'te ayrı bir proje olarak yayınlanır:
- Build: yok
- Root directory: ilgili sektör klasörü (örn. `klinik`)
- Custom domain: `{sektor}.demo.pabiontech.com`

## Tasarım Sahibi

[PabionTech](https://pabiontech.com)
