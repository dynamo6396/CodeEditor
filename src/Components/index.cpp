#include <bits/stdc++.h>
using namespace std;

#define ll long long int 
#define Max INT_MAX
#define Min INT_MIN
#define in(a)   cin>>a
#define inn(a,b) cin>>a>>b
#define innn(a,b,c)  cin>>a>>b>>c
#define fwl(i,a,b)  for(int i=a;i<b;i=i+1)
#define bwl(i,a,b)  for(int i=a;i>=b;i=i-1)
#define invec(a,n)  fwl(i,0,n) cin>>a[i]
#define autol(x,a) for(auto &x:a)
#define all(v)  (v.begin(),v.end())
#define vi vector<int> 
#define vl vector<long long> 
#define vvi vector<vector<int>>
#define vvl vector<vector<long long>>
#define vs vector<string>
#define pb  push_back
#define ppb pop_back
#define pii pair<int,int>
#define vpii vector<pii>
#define makp make_pair
#define unmapii unordered_map<int,int>
#define mapii map<int,int>
#define unsi unordered_set<int>
#define si   set<int>
#define ff first
#define ss second

void primeFactors(int n,vi pf)
{
   while (n % 2 == 0){
      pf.pb(2);
      n = n/2;
   }
   for (int i = 3; i <= sqrt(n); i = i + 2){
         while (n % i == 0){
            pf.pb(i);
            n = n/i;
         }
   }
   if (n > 2)
      pf.pb(n);
}

ll fact(int n)
{
   ll p=1;
   for(ll i=1;i<=n;i++)
      p*=i;
    return p;
}

ll lcm(ll a,ll b){
   return (a*b)/__gcd(a,b); 
}

int fastpower(int a,int b,int m){
   if(b==1)
     return a%m;
   if(b%2==0){
     int t=fastpower(a,b/2,m);
     return (t*t)%m;
   }
   else{
     int t=fastpower(a,(b-1)/2,m);
      t=(t*t)%m;
      return a*t%m;
   }
}
ll sum(ll n){
return (n*(n+1))/2;
}

void BT(){


}
int main() {
     ios_base::sync_with_stdio(false);
     cin.tie(NULL);
     ll t=1;
     cin>>t;
     for(int i=1;i<=t;i++){
           BT();
     }
     return 0;
}