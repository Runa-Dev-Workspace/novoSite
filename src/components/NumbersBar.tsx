const numbers = [
  { val: "+40", label: "Projetos entregues" },
  { val: "100%", label: "Sob medida" },
  { val: "3+", label: "Anos no mercado" },
  { val: "∞", label: "Escalabilidade" },
];

const NumbersBar = () => (
  <div
    id="numbers"
    className="bg-runa-silver-light border-b border-runa-black/[0.07] grid grid-cols-2 lg:grid-cols-4"
  >
    {numbers.map((n, i) => (
      <div
        key={i}
        className={`py-9 px-6 text-center ${
          i < numbers.length - 1 ? "lg:border-r border-runa-black/[0.07]" : ""
        } ${i === 1 ? "max-lg:border-r-0" : ""} ${i % 2 === 0 && i < 2 ? "max-lg:border-r border-runa-black/[0.07]" : ""}`}
      >
        <div className="font-head text-[40px] font-bold text-runa-accent leading-none">
          {n.val}
        </div>
        <div className="text-[10.5px] tracking-[1.5px] text-runa-gray-light mt-1.5 uppercase font-medium">
          {n.label}
        </div>
      </div>
    ))}
  </div>
);

export default NumbersBar;
