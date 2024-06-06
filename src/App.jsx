import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(1);
  const [open, setOpen] = useState(true);
  const [popupContent, setPopupContent] = useState(
    <>
      <p>🎉 مرحبا بك في تطبيقنا المتواضع! 🎉</p>
      <span>
        👋 في هذا التطبيق الرائع، ستجد زراً يتحول من اللون الأخضر إلى اللون
        الأحمر بناءً على بعض الأحداث الشيقة. 🌈
        <br />
        🔢 يبدأ العداد بقيمة 1 ويزداد تدريجياً كلما نقرت على الزر. ولكن هنا يكمن
        الحماس!
        <br />
        🚀 عندما يصل العداد إلى 10، ستزيد القيمة بمقدار 10! وعندما يصل إلى 100،
        ستزيد بمقدار 100! 📈
        <br />
        🎯 وعند وصول العداد إلى 1000، يتوقف الزر الأصلي ويظهر زر جديد لتقليل
        العداد بمقدار 100، ثم 10، ثم 1! 🔄
        <br />
        🤗 استمتع بالتفاعل مع العداد واستكشف هذه المزايا الممتعة!
      </span>
    </>
  );
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  return (
    <div
      className="app"
      style={{
        backgroundColor,
      }}
    >
      {counter > 0 ? (
        <button
          className="addButton mainButton"
          onClick={() => {
            setCount((count) => {
              const newCount = count + counter;
              if (newCount >= 1000) {
                setCounter(-100);

                if (counter != -100) {
                  setBackgroundColor("yellow");
                  setPopupContent(
                    <>
                      <p>🎉 إنجاز رائع! 🎉</p>
                      <span>
                        🔢 لقد وصلت إلى 1000! الزر الحالي سيتوقف عن العمل وستظهر
                        لك خيارات جديدة لتقليل العداد. 🔄
                      </span>
                    </>
                  );
                  setOpen(true);
                }
              } else if (newCount >= 100) {
                setCounter(100);

                if (counter != 100) {
                  setBackgroundColor("lightgreen");
                  setPopupContent(
                    <>
                      <p>🎉 مذهل! 🎉</p>
                      <span>
                        🔢 لقد وصلت إلى 100! الآن ستزيد القيمة بمقدار 100 في كل
                        نقرة! 🌟
                      </span>
                    </>
                  );
                  setOpen(true);
                }
              } else if (newCount >= 10) {
                setCounter(10);

                if (counter != 10) {
                  setBackgroundColor("lightblue");
                  setPopupContent(
                    <>
                      <p>🎉 تهانينا! 🎉</p>
                      <span>
                        🔢 لقد وصلت إلى 10! الآن ستزيد القيمة بمقدار 10 في كل
                        نقرة! 🚀
                      </span>
                    </>
                  );
                  setOpen(true);
                }
              } else setCounter(1);

              return newCount;
            });
          }}
        >
          أضف {counter}
        </button>
      ) : (
        <button
          className="removeButton mainButton"
          onClick={() => {
            setCount((count) => {
              const newCount = count + counter;
              if (newCount > 1000) setCounter(-1000);
              else if (newCount > 100) setCounter(-100);
              else if (newCount > 10) setCounter(-10);
              else if (newCount > 1) setCounter(-1);
              else setCounter(1);

              return newCount;
            });
          }}
        >
          أزل {Math.abs(counter)}
        </button>
      )}
      <p
        className="countDisplay"
        style={{
          color: counter > 0 ? "green" : "red",
        }}
      >
        {count}
      </p>
      <div className={`popup ${open ? "open" : ""}`}>
        {popupContent}
        <button
          onClick={() => {
            setOpen(false);
          }}
        >
          شكرا
        </button>
      </div>
    </div>
  );
};

export default App;
