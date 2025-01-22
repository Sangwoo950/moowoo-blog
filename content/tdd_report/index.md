---
emoji: ✨
title: '최적화... TDD... 효율... 다 따져'
date: '2024-12-19'
categories: featured-ssul
---

## 코드 리펙토링을 통한 최적화.

처음 경험했던 최적화? 는 아마 javascript의 `promise.all()`메서드 였던 것 같다.

우리`promise.all()` 메서드 씨는요...
순회 가능한 객체에 주어진 모든 프로미스가 이행된 후, 혹은 예외처리된 프로미스를 반환해요..
<br>
<br>
게임으로 따지면 1보스에서 죽으면 2보스는 트라이도 못하는거다.

![안돼 돌아가.](return.jpeg)
응 1단계 못 깼잖아 돌아가~😂
<br>
<br>
프로젝트를 진행할 때 한개의 서비스에 여러가지의 기능들이 추가되다 보니, API 요청을 처리하는 함수가 여러 개 있었는데, 매번 함수를 호출할 때마다 처리 속도가 느려지는 게 신경 쓰였다. 게다가 수정할 때마다 반복적인 작업이 필요해서 너무 번거롭고 비효율적이라는 걸 자각 해버렸달까...

이걸 계기로 유지보수 편의성과 효율적인 설계가 얼마나 중요한지 확실히 깨닫게 됐다.

느꼈으면..? 실행해야겠지..?
<br>

단순하게 4개의 API 호출함수의 실행시간이 각 1초가 걸린다고 가정해보자

<em>1초 - 1초 - 1초 - 1초 = 4초 즉, 순차처리로 인하여,4초가 걸리는 것이다.</em>

하지만 `promise.all`은 병렬 실행이기 때문에 실행 될 API 중 가장 오래 걸리는 API의 실행 시간 만큼 소요된다.
설마 1초짜리가 병렬로 4개 실행된다고 <em>0,25 - 0,25 - 0,25 - 0,25 = 1초</em> 로 생각하는 사람은 없겠지
<br>
단순하게 네 사람이 동시에 1분짜리 작업을 한다면, 순차적으로 하면 4분이 걸리지만, 네 사람이 동시에 시작하면 1분 안에 끝낼 수 있는 것.

그렇다 `Promise.all은 모든 사람이 동시에 시작하게 해주는 역할을 한다.`
<br>

```
const snapshots = await Promise.all(promises);
```

메서드를 마지막에 다시 한 번 사용하여 모든 배열의 프로미스가 완료될 때까지 대기하고, 모든 결과를 한 번에 처리시키는 구현방식을 사용했다.
<br>

```
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const handleButtonClick = async () => {
  try {
    const collections = {
      DEPOSIT_BASE_LIST: setProducts,
      SAVING_BASE_LIST: setSavingbaseList,
      DEPOSIT_OPTION_LIST: setdepositOptionalList,
      SAVING_OPTION_LIST: setSavingoptionalList,
    };

    const promises = Object.keys(collections).map((collectionName) =>
      getDocs(collection(db, collectionName))
    );

    // 모든 프로미스가 완료될 때까지 대기
    const snapshots = await Promise.all(promises);

    // 각 스냅샷을 해당 상태로 매핑, 데이터 설정
    snapshots.forEach((snapshot, index) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const collectionName = Object.keys(collections)[index];
      collections[collectionName](data);
    });
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
};

useEffect(() => {
  handleButtonClick();
}, []);
```

끝.

```toc

```
