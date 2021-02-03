import { Fragment, useState } from 'react';
import { useInputValue } from '../utils/hooks/useInputValue';

const DefaultYears = [2020, 2019, 2018, 2017, 2016];
const DefaultMake = ['Acura', 'Toyota', 'BMW'];
const DefaultModel = [
  '2020 Acura TLX',
  '2020 Acura RDX',
  '2019 Acura RDX',
  '2018 Acura RDX',
  '2020 Toyota Yaris',
  '2020 Toyota Corolla',
  '2019 Toyota Camry',
  '2018 Toyota Corolla',
  '2020 BMW 2 SERIES',
  '2019 BMW 2 SERIES',
  '2018 BMW 2 SERIES',
];

export default function Index() {
  const FirstName = useInputValue({});
  const LastName = useInputValue({});
  const Phone = useInputValue({ type: 'phone' });
  const Color = useInputValue({});
  const Plate = useInputValue({});
  const [years, useYears] = useState(DefaultYears[0]);
  const [make, useMake] = useState(DefaultMake[0]);
  const [model, useModel] = useState(DefaultModel[0]);

  function HandleYear(value: any): void {
    useYears(value.target.value);
  }

  function HandleMake(value: any): void {
    useMake(value.target.value);
  }

  function HandleModel(value: any): void {
    useModel(value.target.value);
    console.log(model);
  }

  return (
    <section>
      <form>
        <div>
          <label> First name</label>
          <input {...FirstName} />
        </div>
        <div>
          <label> Last name</label>
          <input {...LastName} />
        </div>
        <div>
          <label> Phone</label>
          <input {...Phone} />
        </div>
        <div>
          <label> Year</label>
          <select onChange={HandleYear}>
            {DefaultYears.map((el, idx) => (
              <option key={idx} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label> Make</label>
          <select onChange={HandleMake}>
            {DefaultMake.map((el, idx) => (
              <option key={idx} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label> Model</label>
          <select onChange={HandleModel}>
            {DefaultModel.map((el, idx) => {
              if (el.includes(years.toString()) && el.includes(make.toString())) {
                return (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                );
              } else {
                return <Fragment key={idx} />;
              }
            })}
          </select>
        </div>
        <div>
          <label> Color</label>
          <input {...Color} />
        </div>
        <div>
          <label> Plate</label>
          <input {...Plate} />
        </div>
      </form>
    </section>
  );
}
