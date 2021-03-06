// Copyright JS Foundation and other contributors, http://js.foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// TODO: Update these tests when the internal routine has been implemented

var target = {};
var handler = { set (target) {
  throw 42;
}};

var proxy = new Proxy(target, handler);

try {
  // vm_op_set_value
  proxy.a = 5
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  // 22.1.3.6.11.b
  Array.prototype.fill.call(proxy, 'foo', 0, 5);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
