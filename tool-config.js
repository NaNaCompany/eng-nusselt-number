export const tool={
  "id": "E073",
  "slug": "eng-nusselt-number",
  "title": "누셀트수 계산기",
  "title_en": "Nusselt Number Calculator",
  "category": "열",
  "category_en": "Heat transfer",
  "fields": [
    {
      "key": "h",
      "label": "평균 대류 열전달계수 h",
      "label_en": "Mean convection coefficient h",
      "dimension": "convection",
      "example": 10,
      "constraint": "positive",
      "display_unit": "Wm2K",
      "display_value": "10"
    },
    {
      "key": "l",
      "label": "특성길이 L",
      "label_en": "Characteristic length L",
      "dimension": "length",
      "example": 0.2,
      "constraint": "positive",
      "display_unit": "m",
      "display_value": "0.2"
    },
    {
      "key": "k",
      "label": "유체 열전도율 k_f",
      "label_en": "Fluid thermal conductivity k_f",
      "dimension": "conductivity",
      "example": 0.5,
      "constraint": "positive",
      "display_unit": "WmK",
      "display_value": "0.5"
    }
  ],
  "result_label": "누셀트수 Nu",
  "result_label_en": "Nusselt number Nu",
  "result_dimension": "ratio",
  "formula": "Nu = hL/k_f",
  "purpose": "알고 있는 대류계수를 무차원 누셀트수로 환산",
  "purpose_en": "Convert a known convection coefficient to a Nusselt number.",
  "assumptions": "h,L,k_f>0. k_f는 유체 열전도율이며 벽 재료의 열전도율이 아니다. h의 평균·국소 기준과 L의 정의를 맞춘다. 열전달 상관식으로 h를 자동 추정하지 않는다.",
  "assumptions_en": "Required: h,L,k_f>0. k_f is the fluid conductivity, not wall conductivity. Match local or mean h and the chosen characteristic length. h is not inferred from a correlation.",
  "sources": [
    {
      "label": "University of Delaware · S. G. Advani · Heat Transfer Review",
      "url": "https://research.me.udel.edu/advani/teaching/s98_me302_review.htm"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-nusselt-number/",
  "repository": "https://github.com/NaNaCompany/eng-nusselt-number",
  "output_unit": "1"
};
