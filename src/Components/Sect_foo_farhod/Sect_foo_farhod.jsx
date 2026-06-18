import React, { useState } from 'react'
import "./Sect_foo_farhod.css"
import { useTranslation } from "react-i18next";

const BOT_TOKEN = "8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0";
const CHAT_ID = "6660879147";

const Sect_foo_farhod = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    telegram_username: "",
    region: "",
    service: "",
    message: ""
  });

  const [status, setStatus] = useState(null);
  const [statusText, setStatusText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setStatusText("");

    const text = `
📩 <b>Yangi ariza</b>
━━━━━━━━━━━━━━
👤 <b>Ism:</b> ${formData.first_name}
👤 <b>Familiya:</b> ${formData.last_name}
📞 <b>Telefon:</b> ${formData.phone_number}
✈️ <b>Telegram:</b> ${formData.telegram_username}
📍 <b>Hudud:</b> ${formData.region}
📋 <b>Xizmat:</b> ${formData.service}
💬 <b>Xabar:</b> ${formData.message}
━━━━━━━━━━━━━━
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: "HTML"
          })
        }
      );

      if (!response.ok) throw new Error("Xatolik yuz berdi");

      setStatus("success");
      setStatusText(t("form.success_message") || "Xabaringiz muvaffaqiyatli yuborildi! ✅");
      setFormData({
        first_name: "",
        last_name: "",
        phone_number: "",
        telegram_username: "",
        region: "",
        service: "",
        message: ""
      });
    } catch (err) {
      setStatus("error");
      setStatusText(t("form.error_message") || "Xatolik yuz berdi. Iltimos qayta urinib ko'ring. ❌");
    }
  };

  return (
    <section className="sect_foo_farhod">
      <div className="container">
        <div className="sect_foo_left">
          <h1>{t('heading')}</h1>
          <p>{t('description')}</p>
          <div className="sect_foo_contact">
            <p>{t('contact_title')}</p>
            <a href="tel:+998957724444">{t('tel_1')}</a>
            <a href="tel:+998996440101">{t('tel_2')}</a>
          </div>
        </div>

        <div className="sect_foo_right">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label htmlFor="first_name">{t('form.first_name')}</label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder={t('form.first_name')}
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="last_name">{t('form.last_name')}</label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder={t('form.last_name')}
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="phone_number">{t('form.phone_number')}</label>
              <input
                id="phone_number"
                name="phone_number"
                type="text"
                placeholder={t('form.phone_number')}
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="telegram_username">{t('form.telegram_username')}</label>
              <input
                id="telegram_username"
                name="telegram_username"
                type="text"
                placeholder={t('form.telegram_username')}
                value={formData.telegram_username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="region">{t('form.region')}</label>
              <input
                id="region"
                name="region"
                type="text"
                placeholder={t('form.region')}
                value={formData.region}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="service">{t('form.select_service')}</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">{t('form.select_service')}</option>
                <option value="Yetkazib berish">{t('form.delivery') || "Yetkazib berish"}</option>
                <option value="Maslahat">{t('form.consultation') || "Maslahat"}</option>
                <option value="Hamkorlik">{t('form.partnership') || "Hamkorlik"}</option>
              </select>
            </div>

            <div className="form_group form_group_span3">
              <label htmlFor="message">{t('form.message')}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t('form.message')}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {(status === "success" || status === "error") && (
              <div className={`sect_foo_form_status ${status} form_group_status`}>
                {statusText}
              </div>
            )}

            <div className="form_group form_group_btn">
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Yuborilmoqda..." : t('form.submit_button')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Sect_foo_farhod
