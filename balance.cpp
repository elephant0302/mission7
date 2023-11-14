#include <iostream>
#include <vector>
using namespace std;

int main(void)
{
	long long n;
	long long left=0;
	long long right=0;
	long long result = 0;
	long long cnt = 0;
	cin >> n;
	vector<int> rock;
	for (int i = 0; i < n; i++) {
		int a;
		cin >> a;
		rock.push_back(a);
	}
	left += rock[0];
	right += rock[1];
	for (int i = 2; i < rock.size(); i++) {
		if (left > right) {
			right += rock[i];
		}
		else {
			left += rock[i];
		}
	}
	if (left > right) {
		result = left - right;
	}
	else {
		result = right - left;
	}
	long long ans = 0;
	ans += result / 100;
	result %= 100;
	ans += result / 50;
	result %= 50;
	ans += result / 20;
	result %= 20;
	ans += result / 10;
	result %= 10;
	ans += result / 5;
	result %= 5;
	ans += result / 2;
	result %= 2;
	ans += result/1;
	
	cout << ans << endl;

}