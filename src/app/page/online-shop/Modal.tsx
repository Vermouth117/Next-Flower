import React from "react";

const Modal = () => {
  return (
    <main>
      <input id="trigger" type="checkbox" />
      <article>
        <label htmlFor="trigger"></label>
        <section>
          <label htmlFor="trigger"> ✖️ </label>
          <section>
            <div>
              <img src="" alt="花束" />
            </div>
            <div>
              <h2>花の名前</h2>
              <p>値段</p>
              <form action="">
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <label htmlFor="quantity"> 個数 </label>
                      </th>
                      <td>
                        <div>
                          <button type="button">−</button>
                          <input
                            id="quantity"
                            name="quantity"
                            type="text"
                            value={1}
                          />
                          <button type="button">+</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button> カートに入れる </button>
              </form>
            </div>
          </section>
          <p className="description">
            気品漂う紫色のブーケです。ブーケの中心を飾るのは、気品漂う紫色とフリルのように波打つ花びらが美しい、ラベンダーカラーのトルコキキョウ。約500品種の中から、ブーケの主役に相応しい逸品を厳選し、一輪でも存在感のあるトルコキキョウを贅沢に使用しました。そんなトルコキキョウを引き立てるのは、花姿、花色ともに個性豊かな旬の草花。トルコキキョウの紫を基調に曲線が美しいグリーンを合わせ、絶妙な色彩を織り成す上品なブーケに仕上げました。落ち着いた気品を感じさせる「Violet
            Night」は、男女問わずお楽しみいただけます。受け取った瞬間心ときめくひと束を、ぜひ大切な方へ贈ってみてはいかがでしょうか。
          </p>
        </section>
      </article>
    </main>
  );
};

export default Modal;
