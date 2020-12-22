import { Slider } from 'antd';

export default function AddUsers() {
  return (
    <section className="addusers">
      <div className="addusers-header">
        <h4>Add more users</h4>
        <p>
          <b>NGN99,999</b> per user
        </p>
      </div>
      <div className="addusers-slider">
        <div className="addusers-slider-header">
          <p className="min">0</p>
          <p className="max"> &gt;1000 </p>
        </div>
        <Slider
          defaultValue={100}
          tooltipVisible={true}
          style={{
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
          }}
          min={0}
          max={1000}
        />
      </div>
    </section>
  );
}
