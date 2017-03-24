// 最长公共字串
#include <iostream>

using namespace std;

char s1[55], s2[55];
int main() {
    gets(s1);
    gets(s2);
    int ans = 0, k;
    for(int i = 0; i < strlen(s1); ++i) {
        for(int j = 0; j < strlen(s2); ++j) {
            for(k = 0; s1[i + k] && s2[j + k] && s1[i + k] == s2[j + k]; k++);
            if(k > ans) ans = k;
        }
    }
    cout << ans << endl;
    return 0;
}
