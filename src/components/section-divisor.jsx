function SectionDivivsor({children, className}) {
  return (
    <div className={"section-divisor " + className}>
      <div className="section-divisor__tag">{children}</div>
      <hr className="section-divisor__hr" />
    </div>
  );
}

export default SectionDivivsor;