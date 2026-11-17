export function Table({ showCaption = true }: { showCaption?: boolean } = {}) {
  return (
    <div className="flex w-[500px] flex-col text-style-sm text-foreground" role="table">
      <div className="flex border-b border-border" role="row">
        <p className="px-2 leading-10 font-medium w-[100px]">Invoice</p>
        <p className="px-2 leading-10 font-medium flex-1">Status</p>
        <p className="px-2 leading-10 font-medium flex-1">Method</p>
        <p className="px-2 leading-10 font-medium w-[100px] text-right">Amount</p>
      </div>
      <div className="flex border-b border-border transition-colors hover:bg-muted/50" role="row">
        <p className="p-2 w-[100px] font-medium">INV001</p>
        <p className="p-2 flex-1">Paid</p>
        <p className="p-2 flex-1">Credit Card</p>
        <p className="p-2 w-[100px] text-right">$250.00</p>
      </div>
      <div className="flex border-b border-border transition-colors hover:bg-muted/50" role="row">
        <p className="p-2 w-[100px] font-medium">INV002</p>
        <p className="p-2 flex-1">Pending</p>
        <p className="p-2 flex-1">PayPal</p>
        <p className="p-2 w-[100px] text-right">$150.00</p>
      </div>
      <div className="flex border-b border-border transition-colors hover:bg-muted/50" role="row">
        <p className="p-2 w-[100px] font-medium">INV003</p>
        <p className="p-2 flex-1">Unpaid</p>
        <p className="p-2 flex-1">Bank Transfer</p>
        <p className="p-2 w-[100px] text-right">$350.00</p>
      </div>
      <div className="flex border-b border-border transition-colors hover:bg-muted/50" role="row">
        <p className="p-2 w-[100px] font-medium">INV004</p>
        <p className="p-2 flex-1">Paid</p>
        <p className="p-2 flex-1">Credit Card</p>
        <p className="p-2 w-[100px] text-right">$450.00</p>
      </div>
      <div className="flex bg-muted/50 font-medium" role="row">
        <p className="flex-1 p-2">Total</p>
        <p className="w-[100px] p-2 text-right">$1,200.00</p>
      </div>
      {showCaption && (
        <p className="mt-4 text-center text-style-sm text-muted-foreground">A list of your recent invoices.</p>
      )}
    </div>
  );
}

export default Table;
