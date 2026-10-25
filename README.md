# 누셀트수 계산기

알고 있는 대류계수를 무차원 누셀트수로 환산

- Plan ID: E073
- App: https://nanalab.kr/eng-nusselt-number/
- Repository: https://github.com/NaNaCompany/eng-nusselt-number
- Formula: `Nu = hL/k_f`
- Output: 누셀트수 Nu

## Model

h,L,k_f>0. k_f는 유체 열전도율이며 벽 재료의 열전도율이 아니다. h의 평균·국소 기준과 L의 정의를 맞춘다. 열전달 상관식으로 h를 자동 추정하지 않는다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `4`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
