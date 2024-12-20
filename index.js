const input = document.getElementById("text-input");
const check = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = () => {
   if (input.value === "") {
      alert("Please input a value");
      return;
   }

   const formattedValue = input.value
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();

   let start = 0;
   let end = formattedValue.length - 1;
   let palindrome = true;

   while (start < end && palindrome === true) {
      if (formattedValue[start] !== formattedValue[end]) {
         palindrome = false;
      }

      start++;
      end--;
   }

   palindrome === true
      ? (result.innerText = `${input.value} is a palindrome`)
      : (result.innerText = `${input.value} is not a palindrome`);
};

check.addEventListener("click", isPalindrome);
