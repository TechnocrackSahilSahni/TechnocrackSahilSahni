#include<iostream>
using namespace std;
int main(){
int n,rem,mul=1;
cout<<"enter a number : ";
cin>>n;
while(n>0){
rem=n%10;
mul=mul*rem;
n=n/10;
}
cout<<the multiplication of the number : "<<mul;
return 0;
}
