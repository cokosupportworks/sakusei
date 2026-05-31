const storageKey = "jiritsu-plan-assist-v1";

const planItems = [
  "実態整理シート",
  "中心的な課題",
  "６区分27項目",
  "目標",
  "指導内容",
  "具体的な手立て",
  "評価の観点",
  "引き継ぎ事項"
];

const defaultPrompts = [
  {
    title: "①実態を整理",
    desc: "児童生徒の中心課題を整理するために必要な情報を集める",
    template:
      `あなたは特別支援教育の専門家です。
以下の実態整理シートを基に、児童生徒理解を深めたいです。
ただし、すぐに中心課題や目標を提示するのではなく、
*  背景要因
*  認知特性
*  感覚面
*  コミュニケーション
*  成功しやすい条件
*  困り感
*  支援するとできることを整理するために、
教師に対して質問をしてください。
条件：
*  一度に質問しすぎない
*  1~3問ずつ質問する
*  回答を踏まえて追加質問する
*  特別支援教育の視点を重視する
*  行動だけでなく背景を探る最終的に、
「中心課題を整理するために必要な情報」が十分集まるようにしてください。
必要な情報が集まったと思ったら、「中心課題の整理に進めます」と伝えてください。`
  },
  {
    title: "②中心的な課題",
    desc: "中心課題を整理する",
    template:
      `あなたは、特別支援教育に詳しい教師です。
ここまでの対話を踏まえて、児童生徒の中心課題を整理してください。
特に、
「見えている行動」だけで判断せず、
*  背景要因
*  認知特性
*  感覚面
*  コミュニケーション
*  不安や見通し
*  成功しやすい条件
*  本人の強み
を関連付けながら分析してください。
以下の観点で整理してください。
① 現在見られる困り感や課題
*  学校生活への景響
*  学習への影響
*  対人関係への影響
*  本人の困り感
②背景要因として考えられること
*  認知面
*  感覚面
*  コミュニケーション面
*  感情面
*  環境要因
1.   本人の強み・活かせるカ
2.   優先して取り組むべき中心課題
*  なぜその課題を優先するのか
*  将来的な自立との関連
*  生活との関連
*  本人主体の視点
⑤ 今後さらに確認するとよい視点
なお、
*  教師側の困り感だけにならない
*  「できないこと」だけに注目しない
*  本人の強みを必ず含める
*  自立活動につながる視点を重視することを大切にしてください。
`
  },
  {
    title: "③６区分27項目との関連",
    desc: "６区分27項目との関連を整理する",
    template:
      `以下の中心課題について、
次の「自立活動の6区分27項目」との関連を整理してください。

自立活動の内容６区分２７項目
１ 健康の保持
（1） 生活のリズムや生活習慣の形成に関すること。
（2） 病気の状態の理解と生活管理に関すること。
（3） 身体各部の状態の理解と養護に関すること。
（4） 障害の特性の理解と生活環境の調整に関すること。
（5） 健康状態の維持・改善に関すること。
２ 心理的な安定
（1） 情緒の安定に関すること。
（2） 状況の理解と変化への対応に関すること。
（3） 障害による学習上又は生活上の困難を改善・克服する意欲に関する こと。
３ 人間関係の形成
（1） 他者とのかかわりの基礎に関すること。
（2） 他者の意図や感情の理解に関すること。
（3） 自己の理解と行動の調整に関すること。
（4） 集団への参加の基礎に関すること。
４ 環境の把握
（1） 保有する感覚の活用に関すること。
（2） 感覚や認知の特性についての理解と対応に関すること。
（3） 感覚の補助及び代行手段の活用に関すること。
（4） 感覚を総合的に活用した周囲の状況についての把握と状況に応じた行動に関すること。
（5） 認知や行動の手掛かりとなる概念の形成に関すること。
５ 身体の動き
（1） 姿勢と運動・動作の基本的技能に関すること。
（2） 姿勢保持と運動・動作の補助的手段の活用に関すること。
（3） 日常生活に必要な基本動作に関すること。
（4） 身体の移動能力に関すること。
（5） 作業に必要な動作と円滑な遂行に関すること。
６ コミュニケーション
（1） コミュニケーションの基礎的能力に関すること。
（2） 言語の受容と表出に関すること。
（3） 言語の形成と活用に関すること。
（4） コミュニケーション手段の選択と活用に関すること。
（5） 状況に応じたコミュニケーションに関すること。


必ず一語一句正確に表記してください。

特に、
*  この児童生徒にとって今もっとも優先度が高いカ
*  なぜその区分が重要なのか
*  学校生活や将来の自立とのつながりを重視してください。
また、
*  主となる区分
*  関連する区分
*  区分同士のつながりも整理してください。
なお、
「すべてを課題にする」のではなく、“今、優先して育てるが”を明確にしてください。`
  },
  {
    title: "④目標案",
    desc: "自立活動の目標案を作成する",
    template:
      `以下の中心課題と自立活動の区分を基に、自立活動の目標案を作成してください。
条件：
*  児童生徒の実態に合っている
*  1年間で取り組める
*  具体的で評価可能
*  学校生活につながる
*  本人主体の視点を含む
*  支援を受けながら達成可能
また、
*  長期目標
*  短期目標
*  評価の視点
も整理してください。
なお、
抽象的な表現だけで終わらず、
「どのような姿を目指すのか」
が分かるようにしてください。`
  },
  {
    title: "指導内容",
    desc: "具体的な指導内容を点案する",
    template:
      `以下の目標を達成するための
自立活動の具体的な指導内容を提案してください。
条件：
*  学校生活の中で実施可能
*  特別な教材がなくてもできる
*  日常生活へ般化しやすい
*  継続的に取り組める
*  本人が成功体験を得やすい
以下の観点で整理してください。
*  活動内容
*  支援方法
*  教師の声かけ
*  環境調整
*  日常生活とのつながり
*  評価方法
また、
「活動をこなすこと」が目的ではなく、
児童生徒が
“自分でできた”
“分かった”
と感じられる視点を大切にしてください。`
  },
  {
    title: "評価文を作成",
    desc: "評価の観点と記録の見方を作る",
    template:
      "自立活動の個別の指導計画の「評価の観点」を作成してください。評価は、できた・できないだけでなく、支援量、場面の広がり、本人の気づき、継続性が分かる観点にしてください。"
  }
];

const promptSourceSignature = defaultPrompts
  .map((prompt) => `${prompt.title}\n${prompt.desc}\n${prompt.template}`)
  .join("\n---\n");

const state = loadState();

const els = {
  aiPreset: document.querySelector("#aiPreset"),
  aiUrl: document.querySelector("#aiUrl"),
  openAi: document.querySelector("#openAi"),
  studentClass: document.querySelector("#studentClass"),
  createdDate: document.querySelector("#createdDate"),
  studentContext: document.querySelector("#studentContext"),
  promptButtons: document.querySelector("#promptButtons"),
  copiedPrompt: document.querySelector("#copiedPrompt"),
  copyAgain: document.querySelector("#copyAgain"),
  copyStatus: document.querySelector("#copyStatus"),
  targetField: document.querySelector("#targetField"),
  captureText: document.querySelector("#captureText"),
  appendToPlan: document.querySelector("#appendToPlan"),
  clearCapture: document.querySelector("#clearCapture"),
  planFields: document.querySelector("#planFields"),
  promptSettings: document.querySelector("#promptSettings"),
  resetPrompts: document.querySelector("#resetPrompts"),
  newPlan: document.querySelector("#newPlan"),
  printPlan: document.querySelector("#printPlan"),
  downloadPlan: document.querySelector("#downloadPlan"),
  privacyModal: document.querySelector("#privacyModal"),
  privacyList: document.querySelector("#privacyList"),
  privacyPreview: document.querySelector("#privacyPreview"),
  cancelPrivacy: document.querySelector("#cancelPrivacy"),
  copySanitizedPrompt: document.querySelector("#copySanitizedPrompt")
};

const privacyState = {
  pendingTemplate: "",
  pendingAdditionalInfo: "",
  candidates: []
};

function loadState() {
  const fallback = {
    prompts: defaultPrompts,
    fields: Object.fromEntries(planItems.map((item) => [item, ""])),
    studentClass: "",
    createdDate: new Date().toISOString().slice(0, 10),
    studentContext: ""
  };

  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    if (!stored) return fallback;
    return {
      ...fallback,
      ...stored,
      prompts:
        Array.isArray(stored.prompts) && stored.promptSourceSignature === promptSourceSignature
          ? stored.prompts
          : fallback.prompts,
      fields: { ...fallback.fields, ...(stored.fields || {}) }
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      prompts: state.prompts,
      promptSourceSignature,
      fields: state.fields,
      studentClass: els.studentClass.value,
      createdDate: els.createdDate.value,
      studentContext: els.studentContext.value
    })
  );
}

function fillTemplate(template, itemName = "") {
  return template
    .replaceAll("{{概要}}", "")
    .replaceAll("{{項目}}", itemName)
    .replaceAll("{{児童生徒名}}", "")
    .replaceAll("{{学年組}}", els.studentClass.value.trim() || "");
}

function buildPrompt(template, additionalInfo) {
  const base = fillTemplate(template).trim();
  const info = additionalInfo.trim();
  if (!info) return base;
  return `${base}\n\n【追加情報】\n${info}`;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    els.copyStatus.textContent = "コピーしました";
  } catch {
    els.copiedPrompt.select();
    document.execCommand("copy");
    els.copyStatus.textContent = "コピーしました";
  }

  window.setTimeout(() => {
    els.copyStatus.textContent = "";
  }, 2400);
}

function normalizeCandidate(value) {
  return value.replace(/[「」『』（）()［］\[\]【】]/g, "").trim();
}

function addCandidate(map, value, reason, type = "other") {
  const term = normalizeCandidate(value);
  if (!term || term.length < 2 || term === "未入力") return;
  if (/^[0-9０-９年月日\s-]+$/.test(term)) return;

  const existing = map.get(term);
  if (existing) {
    existing.reasons.add(reason);
    existing.types.add(type);
    return;
  }

  map.set(term, { term, reasons: new Set([reason]), types: new Set([type]) });
}

const surnamePrefixes = [
  "佐藤",
  "鈴木",
  "高橋",
  "田中",
  "伊藤",
  "渡辺",
  "山本",
  "中村",
  "小林",
  "加藤",
  "吉田",
  "山田",
  "佐々木",
  "山口",
  "松本",
  "井上",
  "木村",
  "林",
  "斎藤",
  "清水",
  "山崎",
  "森",
  "池田",
  "橋本",
  "阿部",
  "石川",
  "山下",
  "中島",
  "石井",
  "小川",
  "前田",
  "岡田",
  "長谷川",
  "藤田",
  "後藤",
  "近藤",
  "村上",
  "遠藤",
  "青木",
  "坂本",
  "斉藤",
  "福田",
  "太田",
  "西村",
  "藤井",
  "金子",
  "岡本",
  "藤原",
  "三浦",
  "中野",
  "中川",
  "原田",
  "松田",
  "竹内",
  "小野",
  "田村",
  "和田",
  "石田",
  "上田",
  "森田",
  "原",
  "柴田",
  "酒井",
  "工藤",
  "横山",
  "宮崎",
  "宮本",
  "内田",
  "高木",
  "安藤",
  "谷口",
  "大野",
  "丸山",
  "今井",
  "高田",
  "藤本",
  "武田",
  "村田",
  "上野",
  "杉山",
  "増田",
  "菅原",
  "平野",
  "小島",
  "久保",
  "松井",
  "岩崎",
  "桜井",
  "野口",
  "松尾",
  "菊地",
  "木下",
  "門間"
];

function detectDictionaryNames(text, map) {
  const kanjiRuns = text.match(/[一-龥々]{3,7}/g) || [];
  kanjiRuns.forEach((run) => {
    surnamePrefixes.forEach((surname) => {
      if (!run.startsWith(surname) || run.length <= surname.length) return;
      const givenName = run.slice(surname.length);
      if (givenName.length > 3) return;
      addCandidate(map, `${surname}${givenName}`, "姓候補に基づく人名の可能性", "person");
    });
  });
}

function detectSensitiveText(text) {
  const map = new Map();
  const labelPatterns = [
    [/(?:氏名|名前|児童生徒名|主治医|担任|保護者)[:：]\s*([^\n、。]+)/g, "人名の可能性", "person"],
    [/(?:学校名|病院名|医療機関)[:：]\s*([^\n、。]+)/g, "個人・団体を示すラベルの後ろの文字列", "organization"],
    [/([一-龥ぁ-んァ-ヶA-Za-z0-9ー・]{2,}(?:小学校|中学校|高等学校|高校|特別支援学校|学校|幼稚園|保育園|こども園|病院|医院|クリニック|療育センター|支援センター|センター))/g, "学校名・病院名・支援機関名の可能性", "organization"],
    [/([一-龥々]{1,4}\s+[一-龥々]{1,4})(?=(?:さん|くん|君|ちゃん|先生|、|。|\s|$))/g, "人名の可能性", "person"],
    [/([一-龥々ぁ-んァ-ヶー]{2,8})(?:さん|くん|君|ちゃん|先生)/g, "敬称付きの人名の可能性", "person"],
    [/([一-龥々]{1,4}[ぁ-ん]{2,5})(?=(?:、|。|\s|$))/g, "ひらがな混じりの人名の可能性", "person"],
    [/([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g, "メールアドレス", "contact"],
    [/(\d{2,4}-\d{2,4}-\d{3,4})/g, "電話番号の可能性", "contact"],
    [/([^\n、。]{2,}(?:都|道|府|県)[^\n、。]{2,}(?:市|区|町|村)[^\n、。]*)/g, "住所の可能性", "address"]
  ];

  labelPatterns.forEach(([pattern, reason, type]) => {
    for (const match of text.matchAll(pattern)) {
      addCandidate(map, match[1], reason, type);
    }
  });
  detectDictionaryNames(text, map);

  const candidates = [...map.values()].map((item) => ({
    term: item.term,
    reason: [...item.reasons].join("、"),
    types: [...item.types]
  }));

  const organizationTerms = candidates
    .filter((item) => item.types.includes("organization"))
    .map((item) => item.term);

  return candidates.filter((item) => {
    if (!item.types.includes("person")) return true;
    if (/(学校|病院|医院|クリニック|センター|幼稚園|保育園|こども園)/.test(item.term)) return false;
    return !organizationTerms.some((organization) => organization.includes(item.term) || item.term.includes(organization));
  });
}

function sanitizePrompt(text, candidates, allowedTerms) {
  return candidates.reduce((current, candidate) => {
    if (allowedTerms.has(candidate.term)) return current;
    return current.split(candidate.term).join("【削除済み】");
  }, text);
}

function updatePrivacyPreview() {
  const allowedTerms = new Set(
    [...els.privacyList.querySelectorAll("input:checked")].map((input) => input.value)
  );
  const safeInfo = sanitizePrompt(privacyState.pendingAdditionalInfo, privacyState.candidates, allowedTerms);
  els.privacyPreview.value = buildPrompt(privacyState.pendingTemplate, safeInfo);
}

function openPrivacyModal(template, additionalInfo, candidates) {
  privacyState.pendingTemplate = template;
  privacyState.pendingAdditionalInfo = additionalInfo;
  privacyState.candidates = candidates;
  els.privacyList.innerHTML = "";

  candidates.forEach((candidate, index) => {
    const label = document.createElement("label");
    label.className = "privacy-item";
    label.innerHTML = `
      <input type="checkbox" value="">
      <span>
        <span class="privacy-term"></span>
        <span class="privacy-reason"></span>
      </span>
    `;

    const checkbox = label.querySelector("input");
    checkbox.value = candidate.term;
    checkbox.id = `privacyCandidate${index}`;
    label.querySelector(".privacy-term").textContent = candidate.term;
    label.querySelector(".privacy-reason").textContent = candidate.reason;
    checkbox.addEventListener("change", updatePrivacyPreview);
    els.privacyList.append(label);
  });

  updatePrivacyPreview();
  els.privacyModal.hidden = false;
  els.copySanitizedPrompt.focus();
}

function closePrivacyModal() {
  els.privacyModal.hidden = true;
  privacyState.pendingTemplate = "";
  privacyState.pendingAdditionalInfo = "";
  privacyState.candidates = [];
}

async function copyPromptWithPrivacyCheck(promptTemplate, additionalInfo) {
  const candidates = detectSensitiveText(additionalInfo);
  if (!candidates.length) {
    const prompt = buildPrompt(promptTemplate, additionalInfo);
    els.copiedPrompt.value = prompt;
    await copyText(prompt);
    return;
  }

  openPrivacyModal(promptTemplate, additionalInfo, candidates);
}

function renderPrompts() {
  els.promptButtons.innerHTML = "";
  const template = document.querySelector("#promptButtonTemplate");

  state.prompts.forEach((prompt) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".prompt-title").textContent = prompt.title;
    node.querySelector(".prompt-desc").textContent = prompt.desc;
    node.addEventListener("click", async () => {
      await copyPromptWithPrivacyCheck(prompt.template, els.studentContext.value);
    });
    els.promptButtons.append(node);
  });
}

function renderTargetOptions() {
  els.targetField.innerHTML = "";
  planItems.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    els.targetField.append(option);
  });
}

function renderPlanFields() {
  els.planFields.innerHTML = "";
  const template = document.querySelector("#planFieldTemplate");

  planItems.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const textarea = node.querySelector("textarea");
    node.querySelector("h3").textContent = item;
    textarea.value = state.fields[item] || "";
    textarea.addEventListener("input", () => {
      state.fields[item] = textarea.value;
      saveState();
    });
    node.querySelector(".copy-field").addEventListener("click", () => copyText(`${item}\n${textarea.value}`));
    els.planFields.append(node);
  });
}

function renderSettings() {
  els.promptSettings.innerHTML = "";
  const template = document.querySelector("#settingTemplate");

  state.prompts.forEach((prompt, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const title = node.querySelector(".setting-title");
    const desc = node.querySelector(".setting-desc");
    const body = node.querySelector(".setting-template");
    title.value = prompt.title;
    desc.value = prompt.desc;
    body.value = prompt.template;

    title.addEventListener("input", () => updatePrompt(index, "title", title.value));
    desc.addEventListener("input", () => updatePrompt(index, "desc", desc.value));
    body.addEventListener("input", () => updatePrompt(index, "template", body.value));
    els.promptSettings.append(node);
  });
}

function updatePrompt(index, key, value) {
  state.prompts[index][key] = value;
  saveState();
  renderPrompts();
}

function appendCapture() {
  const item = els.targetField.value;
  const text = els.captureText.value.trim();
  if (!text) return;

  const current = state.fields[item]?.trim();
  state.fields[item] = current ? `${current}\n\n${text}` : text;
  els.captureText.value = "";
  saveState();
  renderPlanFields();
}

function makePlanText() {
  const lines = [
    "自立活動の個別の指導計画",
    "",
    `学年・組: ${els.studentClass.value || ""}`,
    `作成日: ${els.createdDate.value || ""}`,
    ""
  ];

  planItems.forEach((item) => {
    lines.push(`【${item}】`);
    lines.push(state.fields[item] || "");
    lines.push("");
  });

  return lines.join("\n");
}

function downloadPlan() {
  const blob = new Blob([makePlanText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "自立活動_個別の指導計画.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function newPlan() {
  const ok = window.confirm("現在の児童生徒情報と計画本文を空にします。プロンプト設定は残ります。");
  if (!ok) return;

  els.studentClass.value = "";
  els.createdDate.value = new Date().toISOString().slice(0, 10);
  els.studentContext.value = "";
  els.captureText.value = "";
  els.copiedPrompt.value = "";
  state.fields = Object.fromEntries(planItems.map((item) => [item, ""]));
  saveState();
  renderPlanFields();
}

function initTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("is-active"));
      tab.classList.add("is-active");
      document.querySelector(`#tab-${tab.dataset.tab}`).classList.add("is-active");
    });
  });
}

function initAiControls() {
  els.aiPreset.addEventListener("change", () => {
    els.aiUrl.value = els.aiPreset.value;
  });

  els.openAi.addEventListener("click", () => {
    const url = els.aiUrl.value.trim();
    if (!url) return;
    window.open(url, "aiChatWindow", "popup=yes,width=980,height=960,left=0,top=0,noopener,noreferrer");
  });
}

function initPersistence() {
  els.studentClass.value = state.studentClass;
  els.createdDate.value = state.createdDate;
  els.studentContext.value = state.studentContext;

  [els.studentClass, els.createdDate, els.studentContext].forEach((input) => {
    input.addEventListener("input", saveState);
  });
}

function initActions() {
  els.copyAgain.addEventListener("click", () => {
    if (els.copiedPrompt.value) copyText(els.copiedPrompt.value);
  });
  els.appendToPlan.addEventListener("click", appendCapture);
  els.clearCapture.addEventListener("click", () => {
    els.captureText.value = "";
  });
  els.resetPrompts.addEventListener("click", () => {
    state.prompts = structuredClone(defaultPrompts);
    saveState();
    renderPrompts();
    renderSettings();
  });
  els.newPlan.addEventListener("click", newPlan);
  els.printPlan.addEventListener("click", () => window.print());
  els.downloadPlan.addEventListener("click", downloadPlan);
  els.cancelPrivacy.addEventListener("click", closePrivacyModal);
  els.copySanitizedPrompt.addEventListener("click", async () => {
    els.copiedPrompt.value = els.privacyPreview.value;
    await copyText(els.privacyPreview.value);
    closePrivacyModal();
  });
  els.privacyModal.addEventListener("click", (event) => {
    if (event.target === els.privacyModal) closePrivacyModal();
  });
}

initPersistence();
initTabs();
initAiControls();
initActions();
renderPrompts();
renderTargetOptions();
renderPlanFields();
renderSettings();
