export default interface DbModule {
  connect(): void;
  dispose(): void;
  storeInput(input: any): void;
  isConnected(): boolean;

}
