import { foo } from 'package-a';

export function bar() {
  console.log('This is bar from package-b!');
  foo();
}