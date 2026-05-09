const plans = {
    mon: {
      label: "Monday Plan",
      title: "下半身＋ウォーキング",
      items: ["椅子スクワット 10回×3", "椅子立ち座り 15回×3", "ウォーキングマシン 20分"]
    },
    tue: {
      label: "Tuesday Plan",
      title: "有酸素の日",
      items: ["ウォーキングマシン 30〜40分", "呼吸を整えるストレッチ 5分", "無理せず会話できる速度で歩く"]
    },
    wed: {
      label: "Wednesday Plan",
      title: "上半身＋姿勢",
      items: ["壁腕立て 10回×3", "タオル肩甲骨運動 10回×3", "軽い腹筋 10回×2"]
    },
    thu: {
      label: "Thursday Plan",
      title: "回復日",
      items: ["軽い散歩 10〜20分", "股関節・ふくらはぎストレッチ", "睡眠と水分を意識"]
    },
    fri: {
      label: "Friday Plan",
      title: "下半身＋体幹",
      items: ["椅子スクワット 10回×3", "かかと上げ 15回×3", "片足立ち 左右20秒×2"]
    },
    sat: {
      label: "Saturday Plan",
      title: "長めウォーキング",
      items: ["ウォーキングマシン 40〜60分", "疲れたら途中休憩OK", "終わったら足首・ふくらはぎケア"]
    },
    sun: {
      label: "Sunday Plan",
      title: "完全休養",
      items: ["湯船で温める", "軽いストレッチ", "翌週の食材を準備"]
    }
  };
  
  const buttons = document.querySelectorAll(".day");
  const card = document.getElementById("trainingCard");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
  
      const plan = plans[button.dataset.day];
  
      card.innerHTML = `
        <p class="training-card__label">${plan.label}</p>
        <h3>${plan.title}</h3>
        <ul>
          ${plan.items.map(item => `<li>${item}</li>`).join("")}
        </ul>
      `;
    });
  });
  