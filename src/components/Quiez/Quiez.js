import { navigate } from "gatsby";
import * as React from "react"
import Button from "../Button/Button";
import { TeachersStyles } from "./TeacherStyles";

const data = `Хотите хотя бы  на час полностью забывать обо всем и снимать стресс? (Без психологов и успокоительных?)
✔️Хотите раскрепоститься, избавиться от комплексов и по другому смотреть на себя в зеркало?
✔️Хотите держать своё тело в тонусе без скучных, изнурительных и дорогих походов в спортзал?
✔️Хотите снять эмоциональные и телесные зажимы?Полноценно проживать свои эмоции?
✔️Хотите тренировать Ваш мозг и память не замечая этого?
✔️Хотите улучшить взаимоотношения с противоположным полом?
✔️Хотите добавить романтики и чувственности Вашим отношениям или может заново разжечь огонь в вашей паре?`

const Quiez = () => {
  const [selected, setSelected] = React.useState([]);

  const handleSelect = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index))
    } else {
      setSelected([...selected, index]);
    }
  }

  return (
    <TeachersStyles className="section">
      <div className="container container__tight">
        <div className="intro__area">
          <h2>Хотите понять стоит ли вообще начинать?</h2>
        </div>
      </div>

      <div className="container container__tight container__scroll">
        <ul className="why-list">
          {data.split('✔️').map((i, index) => (
            <li onClick={() => handleSelect(index)} key={index}>
              {selected.includes(index) ? <span>✔️.</span> : <span>❓.</span>} {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="container container__tight">
        <div className="intro__area">
          <p>Если Вы хотя бы раз ответили да, то мы приглашаем Вас окунуться в атмосферу Латинской Америки в компании талантливых и опытных преподавателей и получить гораздо БОЛЬШЕ чем танцы!</p>
        </div>
        <Button color="#ffc400" onClick={() => navigate('#enroll')} text="Записаться" />
      </div>
    </TeachersStyles>
  )
}

export default Quiez;
