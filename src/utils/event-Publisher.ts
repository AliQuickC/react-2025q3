type StorageAction = 'storage';
type publisherActionType = StorageAction;
export type ChangeLSWordEvent = { newWord: string };
export type publisherEvent = object | ChangeLSWordEvent;

export default class Publisher {
  private listeners: { [key: string]: ((event: publisherEvent) => void)[] };

  constructor() {
    this.listeners = new Object() as {
      [key: string]: ((event: publisherEvent) => void)[];
    };
  }

  public triggerEvent(
    eventName: publisherActionType,
    event: publisherEvent = {}
  ): void {
    if (this.listeners) {
      this.listeners[eventName]?.forEach((callback) => {
        callback(event);
      });
    }
  }

  public addEventListener(
    eventName: publisherActionType,
    listener: (event: publisherEvent) => void
  ): () => void {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(listener);
    return () => {
      this.removeEventListener(eventName, listener);
    };
  }

  public removeEventListener(
    eventName: publisherActionType,
    listener: (event: publisherEvent) => void
  ): void {
    if (this.listeners[eventName]) {
      this.listeners[eventName] = this.listeners[eventName].filter(
        (fn) => fn !== listener
      );
    }
  }
}
