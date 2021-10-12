/*
    d.ts files are only used for type definitions
*/

export interface RGBColorType {
    red: number;
    green: number;
    blue: number;
}


/**
 * UTILITY TYPES
 */


type Link<T> = {
    value: T,
    next?: Link<T>
  }
  const first: Link<string> = {
    value: 'a'
  }
  const second: Link<string> = {
    value: 'b'
  }
  first.next = second
  
  function createNode<T>(value: T): Link<T>{
    return {value}
  }
  
  const node = createNode('abc')
  const node2 = createNode<number>(1)
  
  function identity<T>(value: T): T{
    return value
  }
  
  let iden = identity(0)
  const tbos = [2,2] as const
  
  function tap<T>(arg: T, fn: (x: T) => void): T{
    fn(arg)
    return arg
  }
  
  const arrayWithoutLast = tap([1, 2, 3, 4], function (array) {
    // Pop always returns the value it removed from the end of the array.
    return array.pop();
  });
  
  
  /*
    Utility types
  */
  
  type ObjectLiteralType = {
    first: 1,
    second: 2,
    3: 'a'
  }
  
  type Result = keyof ObjectLiteralType
  const a: Result = 3
  
  type Obj = {
    0: 'a',
    1: 'b',
    prop0: 'c',
    prop1: 'd'
  }
  type Result0 = Obj[0]
  const res0: Result0 = 'a';
  type Result1 = Obj[0 | 1]
  const res1: Result1 = 'b'
  
  type Values = Obj[keyof Obj]
  
  /**
   * UNIONS
   */
  type ObjectTypeA = {
    firstProp: number;
    sharedProp: string;
    extra: string
  }
  type ObjectTypeB = {
    secondProp: boolean;
    sharedProp: string;
  }
  type Union1 = ObjectTypeA | ObjectTypeB
  const u1: Union1 = {
    sharedProp: '',
    firstProp: 1,
    extra: '',
  }
  
  type A = 'a' | 'b' | 'c'
  type B = 'b' | 'c' | 'd'
  type Union2 = A | B
  const u2: Union2 = 'd'
  
  type Intersection1 = A & B
  const i1: Intersection1 = "b"
  
  type Intersection2 = ObjectTypeA & ObjectTypeB
  const i2: Intersection2 = {
    extra: '',
    firstProp: 1,
    sharedProp: '',
    secondProp: false
  }
  
  /**
   * CONDITIONALS
   */
  type Wrap<T> = T extends {length: number}?[T]:T
  
  type Wrap1 = Wrap<{length: number}>
  type Wrap2 = Wrap<{random: boolean}>
  const w1: Wrap1 = [{
    length: 6
  }]
  const w2: Wrap2 = {
    random: true
  }
  
  type IsAssignableTo<A, B> = A extends B? true: false
  
  type iat1 = IsAssignableTo<213, number>
  type iat2 = IsAssignableTo<213, boolean>